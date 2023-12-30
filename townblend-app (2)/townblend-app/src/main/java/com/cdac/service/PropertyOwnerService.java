package com.cdac.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.PropertyDetails;
import com.cdac.entity.PropertyOwner;
import com.cdac.entity.PropertyOwner.ApprovalStatus;
import com.cdac.exception.ServiceException;
import com.cdac.repository.PropertyDetailsRepository;
import com.cdac.repository.PropertyOwnerRepository;

@Service
public class PropertyOwnerService {
	@Autowired
	private PropertyOwnerRepository propertyOwnerRepository;
	
	@Autowired
	private PropertyDetailsRepository propertyDetailsRepository;
	
	public int register(PropertyOwner propertyOwner) {
		Optional<PropertyOwner> ownerCheck = propertyOwnerRepository.findByEmail(propertyOwner.getEmail());
		if(!ownerCheck.isPresent()) {
			propertyOwner.setApprovalStatus(ApprovalStatus.PENDING);
			PropertyOwner savedOwner = propertyOwnerRepository.save(propertyOwner);
			return savedOwner.getId();
		}else {
			throw new ServiceException("User already registered");
		}
		
	}
	public void approvalByHost(PropertyOwner propertyOwner) {
		
			propertyOwner.setApprovalStatus(ApprovalStatus.APPROVED);
			PropertyOwner savedOwner = propertyOwnerRepository.save(propertyOwner);
			
	
		
	}
	public void rejectByHost(PropertyOwner propertyOwner) {
		
		propertyOwner.setApprovalStatus(ApprovalStatus.REJECTED);
		PropertyOwner savedOwner = propertyOwnerRepository.save(propertyOwner);
		

	
}
	
	public PropertyOwner login(String email, String password) {
		Optional<PropertyOwner> ownerLoggedIn = propertyOwnerRepository.findByEmailAndPassword(email, password);
		if(ownerLoggedIn.isPresent()) {
			return ownerLoggedIn.get();
		}else {
			throw new ServiceException("Invalid credentails");
		}
	}

	public void addPropertyDetails(int ownerId, PropertyDetails propertyDetails) {
		PropertyOwner owner = propertyOwnerRepository.findById(ownerId)
				.orElseThrow(()-> new ServiceException("Owner not found"));
		
		propertyDetails.setOwner(owner);
		propertyDetailsRepository.save(propertyDetails);
		
	}
	
	public void deletePropertyDetails(int propertyDetailsId, int ownerId) {
 
        Optional<PropertyDetails> optionalPropertyDetails = propertyDetailsRepository.findById(propertyDetailsId);

        if (optionalPropertyDetails.isPresent()) {
            PropertyDetails propertyDetails = optionalPropertyDetails.get();

            if (propertyDetails.getOwner().getId() == ownerId) {
                propertyDetailsRepository.delete(propertyDetails);
            } else {
                throw new ServiceException("Unauthorized: You are not the owner of this property details.");
            }
        } else {
            throw new ServiceException("Property details not found.");
        }
    }
	
	public void approveOwner(int ownerId) {
        PropertyOwner owner = propertyOwnerRepository.findById(ownerId)
                .orElseThrow(() -> new RuntimeException("Owner not found"));

        if (owner.getApprovalStatus() == ApprovalStatus.PENDING) {
            // Approve the owner
            owner.setApprovalStatus(ApprovalStatus.APPROVED);
            propertyOwnerRepository.save(owner);
        } else {
            // Reject the owner (or handle accordingly)
            throw new ServiceException("Owner has already been approved or rejected.");
        }
    }
}

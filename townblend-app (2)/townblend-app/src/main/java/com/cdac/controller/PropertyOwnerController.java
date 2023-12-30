package com.cdac.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.LoginStatus;
import com.cdac.dto.RegistrationStatus;
import com.cdac.entity.PropertyDetails;
import com.cdac.entity.PropertyOwner;
import com.cdac.exception.ServiceException;
import com.cdac.service.PropertyOwnerService;

@RestController
public class PropertyOwnerController {
	@Autowired
	private PropertyOwnerService propertyOwnerService;
	
	@PostMapping("/ownerregister")
	public RegistrationStatus register(@RequestBody PropertyOwner propertyOwner, Map map) {
		
		try {
			int id = propertyOwnerService.register(propertyOwner);
			
			RegistrationStatus status = new RegistrationStatus();
			
			status.setStatus(true);
			status.setStatusMessage("Owner registered successfully");
			status.setId(id);
			return status;
			
		}catch(ServiceException e) {
			
			RegistrationStatus status = new RegistrationStatus();
			
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			
			return status;
		}
		
	}
	
	@PostMapping("/owner/login")
	public LoginStatus login(@RequestBody Map<String, String> loginData) {
		try {
			String email = loginData.get("email");
			String password = loginData.get("password");
			
			PropertyOwner propertyOwner = propertyOwnerService.login(email, password);
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(true);
			status.setStatusMessage("Login successful");
			
			return status;
			
		}catch(ServiceException e) {
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			
			return status;
		}
	}
		
	@PostMapping("{ownerId}/addProperty")
	public void addPropertyDetails(@PathVariable int ownerId, @RequestBody PropertyDetails propertyDetails) {
		propertyOwnerService.addPropertyDetails(ownerId, propertyDetails);
	}
	
	@DeleteMapping("/propertyDetails/{propertyDetailsId}")
    public void deletePropertyDetails(@PathVariable int propertyDetailsId, @RequestParam int ownerId) {
        propertyOwnerService.deletePropertyDetails(propertyDetailsId, ownerId);
    }
	
	 @PostMapping("/{ownerId}/approve")
	 public void approveOwner(@PathVariable int ownerId) {
		 propertyOwnerService.approveOwner(ownerId);
	 }
}

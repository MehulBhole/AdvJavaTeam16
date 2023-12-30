package com.cdac.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.service.AdminService;
import com.cdac.dto.AdminRespone;
import com.cdac.entity.Admin;
@RestController
public class AdminController {

 @Autowired
 private AdminService adminService;

 @PostMapping("/adminregister")
 public AdminRespone registerAdmin(@RequestBody Admin admin) {
     if (adminService.isAdminExists()) {
         return new AdminRespone("Admin already registered.");
     }
     adminService.registerAdmin(admin);
     return new AdminRespone("Admin registered successfully.");
 }

 @PostMapping("/adminlogin")
 public AdminRespone loginAdmin(@RequestBody Map<String, String> credentials) {
     String email = credentials.get("email");
     String password = credentials.get("password");

     if (adminService.validateAdminCredentials(email, password)) {
         return new AdminRespone("Admin login successful.");
     } else {
         return new AdminRespone("Invalid credentials.");
     }
 }
}

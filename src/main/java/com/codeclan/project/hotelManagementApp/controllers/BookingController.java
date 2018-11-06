package com.codeclan.project.hotelManagementApp.controllers;

import com.codeclan.project.hotelManagementApp.repositories.BookingRepository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    //TODO: route to all bookings per date
    //TODO: route to all guest per date
    //TODO: route to all bookings per guest
}

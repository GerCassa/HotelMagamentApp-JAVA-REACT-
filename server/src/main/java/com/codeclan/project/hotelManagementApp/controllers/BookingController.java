package com.codeclan.project.hotelManagementApp.controllers;

import com.codeclan.project.hotelManagementApp.models.Booking;
import com.codeclan.project.hotelManagementApp.repositories.BookingRepository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/perDate")
    public List<Booking> allBookings() {
        return bookingRepository.allBookings();
    }

    @GetMapping(value = "/perDate/{date}")
    public List<Booking> getBookingsPerDate(@PathVariable String date) {
        return bookingRepository.getBookingsPerDate(date);
    }

    //TODO: route to all guest per date
    //TODO: route to all bookings per guest
}

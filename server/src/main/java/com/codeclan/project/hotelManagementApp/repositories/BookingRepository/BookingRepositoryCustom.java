package com.codeclan.project.hotelManagementApp.repositories.BookingRepository;

import com.codeclan.project.hotelManagementApp.models.Booking;

import java.util.List;

public interface BookingRepositoryCustom {
    List<Booking> allBookings();

    List<Booking> getBookingsPerDate(String date);
}

package com.codeclan.project.hotelManagementApp.Projections;

import com.codeclan.project.hotelManagementApp.models.Booking;
import com.codeclan.project.hotelManagementApp.models.Guest;
import org.springframework.data.rest.core.config.Projection;


@Projection(name = "embed", types = Booking.class)
public interface BookingEmbed {
    Long getId();
    Guest getGuest();
    String getDate();
    int getLength();
    int getPeople();
}

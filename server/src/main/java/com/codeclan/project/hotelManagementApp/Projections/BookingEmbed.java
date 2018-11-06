package com.codeclan.project.hotelManagementApp.Projections;

import com.codeclan.project.hotelManagementApp.models.Guest;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "booking_embed", types = Guest.class)
public interface BookingEmbed {
    String getFirstName();
    String getLastName();
    int getAge();
}

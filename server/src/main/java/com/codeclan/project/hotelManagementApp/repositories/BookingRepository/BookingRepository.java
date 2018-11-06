package com.codeclan.project.hotelManagementApp.repositories.BookingRepository;

import com.codeclan.project.hotelManagementApp.Projections.BookingEmbed;
import com.codeclan.project.hotelManagementApp.models.Booking;
import com.codeclan.project.hotelManagementApp.models.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = BookingEmbed.class)
public interface BookingRepository extends JpaRepository<Booking, Long> {
}

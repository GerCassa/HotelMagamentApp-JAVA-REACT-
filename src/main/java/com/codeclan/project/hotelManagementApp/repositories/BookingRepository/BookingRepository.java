package com.codeclan.project.hotelManagementApp.repositories.BookingRepository;

import com.codeclan.project.hotelManagementApp.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}

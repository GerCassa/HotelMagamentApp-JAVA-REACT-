package com.codeclan.project.hotelManagementApp.repositories.GuestRepository;

import com.codeclan.project.hotelManagementApp.models.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuestRepository extends JpaRepository<Guest, Long> {
}

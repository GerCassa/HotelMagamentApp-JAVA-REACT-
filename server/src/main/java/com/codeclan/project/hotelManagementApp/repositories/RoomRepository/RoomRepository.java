package com.codeclan.project.hotelManagementApp.repositories.RoomRepository;

import com.codeclan.project.hotelManagementApp.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}

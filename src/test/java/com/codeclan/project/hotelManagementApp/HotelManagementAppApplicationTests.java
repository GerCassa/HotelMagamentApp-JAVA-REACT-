package com.codeclan.project.hotelManagementApp;

import com.codeclan.project.hotelManagementApp.models.Guest;
import com.codeclan.project.hotelManagementApp.models.Room;
import com.codeclan.project.hotelManagementApp.models.Booking;
import com.codeclan.project.hotelManagementApp.repositories.BookingRepository;
import com.codeclan.project.hotelManagementApp.repositories.GuestRepository;
import com.codeclan.project.hotelManagementApp.repositories.RoomRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HotelManagementAppApplicationTests {

	@Autowired
	GuestRepository guestRepository;

	@Autowired
	RoomRepository roomRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canSaveGuest() {
		Guest guest = new Guest("Juan", "Perez", 30, "AASw21231", 123, "asdasd");
		guestRepository.save(guest);
	}



}

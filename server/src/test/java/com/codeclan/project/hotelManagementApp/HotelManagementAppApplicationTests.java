package com.codeclan.project.hotelManagementApp;

import com.codeclan.project.hotelManagementApp.models.Guest;
import com.codeclan.project.hotelManagementApp.models.Room;
import com.codeclan.project.hotelManagementApp.models.Booking;
import com.codeclan.project.hotelManagementApp.repositories.BookingRepository.BookingRepository;
import com.codeclan.project.hotelManagementApp.repositories.GuestRepository.GuestRepository;
import com.codeclan.project.hotelManagementApp.repositories.RoomRepository.RoomRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

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

	@Test
	public void canCreateBooking() {
		Guest guest = new Guest("Juan", "Perez", 30, "AASw21231", 123, "asdasd");
		guestRepository.save(guest);
		Booking booking = new Booking("20/11/2018", 3, 2, guest, null );
		bookingRepository.save(booking);
	}

	@Test
	public void canCreateAndSaveRoom() {
		Room room = new Room(1, 2);
		roomRepository.save(room);
	}

	@Test
	public void canAssignRoomToBooking() {
		Guest guest = new Guest("Juan", "Perez", 30, "AASw21231", 123, "asdasd");
		guestRepository.save(guest);
		Booking booking = new Booking("19/11/2018", 3, 2, guest, null );
		bookingRepository.save(booking);
		Room room = new Room(1, 2);
		roomRepository.save(room);
		booking.setRoom(room);
		bookingRepository.save(booking);
	}

	@Test
	public void canGetAllBookingPerDate(){
		Guest guest = new Guest("Juan", "Perez", 30, "AASw21231", 123, "asdasd");
		guestRepository.save(guest);

//		Booking booking1 = new Booking("25-11-2018", 3, 2, guest, null );
//		bookingRepository.save(booking1);

		Booking booking2 = new Booking("25-11-2018", 2, 1, guest, null );
		bookingRepository.save(booking2);

		Booking booking3 = new Booking("22-11-2019", 4, 2, guest, null );
		bookingRepository.save(booking3);

		List<Booking> results = bookingRepository.getBookingsPerDate("22-11-2019");
		assertEquals(1, results.size());
	}
}

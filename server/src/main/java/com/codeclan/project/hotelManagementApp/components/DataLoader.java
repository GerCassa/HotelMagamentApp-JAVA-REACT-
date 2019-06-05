package com.codeclan.project.hotelManagementApp.components;

import com.codeclan.project.hotelManagementApp.models.Booking;
import com.codeclan.project.hotelManagementApp.models.Guest;
import com.codeclan.project.hotelManagementApp.models.Room;
import com.codeclan.project.hotelManagementApp.repositories.BookingRepository.BookingRepository;
import com.codeclan.project.hotelManagementApp.repositories.GuestRepository.GuestRepository;
import com.codeclan.project.hotelManagementApp.repositories.RoomRepository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    GuestRepository guestRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Guest guest = new Guest("Juan", "Perez", 30, "AASw21231", 123, "asdasd");
        guestRepository.save(guest);

        Booking booking = new Booking("25-11-2018", 3, 2, guest, null );
        bookingRepository.save(booking);

        Room room1 = new Room(1, 2);
        roomRepository.save(room1);
        Room room2 = new Room(2, 3);
        roomRepository.save(room2);
        Room room3 = new Room(3, 4);
        roomRepository.save(room3);

        booking.setRoom(room1);
        bookingRepository.save(booking);
    }
}

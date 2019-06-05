package com.codeclan.project.hotelManagementApp.repositories.BookingRepository;

import com.codeclan.project.hotelManagementApp.models.Booking;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class BookingRepositoryImpl implements BookingRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Booking> allBookings() {
        List<Booking> bookings = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria criteria = session.createCriteria(Booking.class);
            bookings = criteria.list();
        } catch (HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return bookings;
    }

    @Transactional
    public List<Booking> getBookingsPerDate(String date) {
        List<Booking> bookings = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Booking.class);
            cr.add(Restrictions.eq("date",date));
            bookings = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return bookings;
    }
}

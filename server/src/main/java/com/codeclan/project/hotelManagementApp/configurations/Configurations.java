import com.codeclan.project.hotelManagementApp.models.Booking;
import com.codeclan.project.hotelManagementApp.models.Guest;
import com.codeclan.project.hotelManagementApp.models.Room;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;


@Configuration
class SpringDataRestConfig extends RepositoryRestConfigurerAdapter {


    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Room.class, Booking.class, Guest.class);
    }
}

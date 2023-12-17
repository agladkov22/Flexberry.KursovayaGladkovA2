package Kursovaya_Gladkov_A.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov_A.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Заявки
 */
@Entity(name = "IISKursovaya_Gladkov_AЗаявки")
@Table(schema = "public", name = "Заявки")
public class Zayavki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЗаявки")
    private Integer номерзаявки;

    @Column(name = "ДатаЗаявки")
    private Date датазаявки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;

    @OneToMany(mappedBy = "zayavki", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TchZayavka> tchzayavkas;


    public Zayavki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЗаявки() {
      return номерзаявки;
    }

    public void setНомерЗаявки(Integer номерзаявки) {
      this.номерзаявки = номерзаявки;
    }

    public Date getДатаЗаявки() {
      return датазаявки;
    }

    public void setДатаЗаявки(Date датазаявки) {
      this.датазаявки = датазаявки;
    }


}
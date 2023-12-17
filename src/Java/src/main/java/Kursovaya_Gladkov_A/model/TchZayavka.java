package Kursovaya_Gladkov_A.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov_A.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТчЗаявка
 */
@Entity(name = "IISKursovaya_Gladkov_AТчЗаявка")
@Table(schema = "public", name = "ТчЗаявка")
public class TchZayavka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерДетали")
    private Integer номердетали;

    @Column(name = "НаименДетали")
    private String наимендетали;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Цена")
    private Float цена;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Materialy")
    @Convert("Materialy")
    @Column(name = "Материалы", length = 16, unique = true, nullable = false)
    private UUID _materialyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Materialy", insertable = false, updatable = false)
    private Materialy materialy;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zayavki")
    @Convert("Zayavki")
    @Column(name = "Заявки", length = 16, unique = true, nullable = false)
    private UUID _zayavkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zayavki", insertable = false, updatable = false)
    private Zayavki zayavki;


    public TchZayavka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерДетали() {
      return номердетали;
    }

    public void setНомерДетали(Integer номердетали) {
      this.номердетали = номердетали;
    }

    public String getНаименДетали() {
      return наимендетали;
    }

    public void setНаименДетали(String наимендетали) {
      this.наимендетали = наимендетали;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Float getЦена() {
      return цена;
    }

    public void setЦена(Float цена) {
      this.цена = цена;
    }


}
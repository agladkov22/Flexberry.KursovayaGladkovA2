package Kursovaya_Gladkov_A.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov_A.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Чертеж
 */
@Entity(name = "IISKursovaya_Gladkov_AЧертеж")
@Table(schema = "public", name = "Чертеж")
public class CHertezh {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЧертежа")
    private Integer номерчертежа;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Утверждение")
    private Boolean утверждение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TchZayavka")
    @Convert("TchZayavka")
    @Column(name = "ТчЗаявка", length = 16, unique = true, nullable = false)
    private UUID _tchzayavkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TchZayavka", insertable = false, updatable = false)
    private TchZayavka tchzayavka;


    public CHertezh() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЧертежа() {
      return номерчертежа;
    }

    public void setНомерЧертежа(Integer номерчертежа) {
      this.номерчертежа = номерчертежа;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Boolean getУтверждение() {
      return утверждение;
    }

    public void setУтверждение(Boolean утверждение) {
      this.утверждение = утверждение;
    }


}
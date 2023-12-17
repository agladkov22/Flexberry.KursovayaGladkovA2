package Kursovaya_Gladkov_A.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov_A.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ТехКарта
 */
@Entity(name = "IISKursovaya_Gladkov_AТехКарта")
@Table(schema = "public", name = "ТехКарта")
public class TexKarta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКарты")
    private Integer номеркарты;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "CHertezh")
    @Convert("CHertezh")
    @Column(name = "Чертеж", length = 16, unique = true, nullable = false)
    private UUID _chertezhid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "CHertezh", insertable = false, updatable = false)
    private CHertezh chertezh;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Oborudovanie")
    @Convert("Oborudovanie")
    @Column(name = "Оборудование", length = 16, unique = true, nullable = false)
    private UUID _oborudovanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Oborudovanie", insertable = false, updatable = false)
    private Oborudovanie oborudovanie;


    public TexKarta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКарты() {
      return номеркарты;
    }

    public void setНомерКарты(Integer номеркарты) {
      this.номеркарты = номеркарты;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}
    package com.bonappetit.gesture.Models.Order;


    import com.fasterxml.jackson.annotation.JsonBackReference;
    import com.fasterxml.jackson.annotation.JsonIgnore;
    import jakarta.persistence.*;
    import lombok.*;

    import java.io.Serializable;
    import java.util.Objects;

    @Entity
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @ToString
    public class OrderItem  {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
        private Integer itemId;
        private Integer amount;
        private String itemName;
        private Double itemPrice;
        private String requestStatus;
        @ManyToOne
        @JoinColumn(name = "service_order_id")
        @JsonIgnore
        private ServiceOrder serviceOrder;


        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            OrderItem  that = (OrderItem ) o;
            return id == that.id;
        }

        @Override
        public int hashCode() {
            return Objects.hash(id);
        }


    }

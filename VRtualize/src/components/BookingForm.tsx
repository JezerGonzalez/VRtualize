import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function BookingForm() {
    const [sending, setSending] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .sendForm(
                "service_rrgqyku",
                "template_1f2apm6",
                e.currentTarget,
                "TVcwLO9p0UGkj0YQE"
            )
            .then(
                (response) => {
                    // EmailJS returns: status === 200 on success
                    if (response.status === 200) {
                        alert("¡Tu reserva fue enviada con éxito!");
                        e.currentTarget.reset();
                    } else {
                        alert("Hubo un problema inesperado. Intenta nuevamente.");
                    }
                    setSending(false);
                },
                (error) => {
                    // This only triggers on real network errors
                    console.error("EmailJS error:", error);
                    alert("Hubo un error enviando tu reserva. Intenta de nuevo.");
                    setSending(false);
                }
            );
    };

    return (
        <section className="booking-section" aria-labelledby="booking-heading">
            <h2 id="booking-heading">Reserva Tu Experiencia</h2>

            <form onSubmit={sendEmail} aria-label="Formulario de reserva para VRtualize">

                <label htmlFor="name">Nombre Completo *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Tu nombre completo"
                />

                <label htmlFor="email">Correo Electrónico *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tu.correo@ejemplo.com"
                />

                <label htmlFor="phone">Número de Teléfono *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(123) 456-7890"
                    pattern="[0-9\\s\\-\\+\\(\\)]{7,}"
                />

                <label htmlFor="date">Fecha Preferida *</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="package">Elige Paquete *</label>
                <select id="package" name="package" required>
                    <option value="" disabled defaultValue="">
                        Selecciona un paquete
                    </option>
                    <option value="lasertag">Lasertag - $250</option>
                    <option value="vrstations">Estaciones VR - $150</option>
                    <option value="mariokart">Mario Kart AR - $120</option>
                    <option value="boardgames2">Juegos de Mesa Digitales (2 tablets)</option>
                    <option value="boardgames3">Juegos de Mesa Digitales (3 tablets)</option>
                    <option value="giantboardgames">
                        Complemento Juegos Gigantes
                    </option>
                    <option value="events">Eventos</option>
                </select>

                <label htmlFor="guestCount">Número de Invitados (máx. 20) *</label>
                <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    min={1}
                    max={20}
                    required
                    defaultValue={1}
                />

                <label htmlFor="additionalInfo">Información Adicional</label>
                <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Cuéntanos más sobre tu evento..."
                />

                <button type="submit" disabled={sending}>
                    {sending ? "Enviando..." : "Enviar Reserva"}
                </button>
            </form>
        </section>
    );
}

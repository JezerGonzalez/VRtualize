export default function Pricing() {
    return (
        <section className="pricing-section" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading">Paquetes de Precios</h2>

            <ul className="pricing-list">
                <li>
                    <strong>Lasertag de Realidad Virtual:</strong> $250 – 2 jugadores, 2
                    horas ilimitado
                </li>

                <li>
                    <strong>Estaciones VR:</strong> $150 – 2 estaciones, 2 horas
                </li>

                <li>
                    <strong>Mario Kart AR:</strong> $120 – 2 estaciones, 2 horas
                </li>

                <div className="digital-board-games-box">
                    <strong>Juegos de Mesa Digitales:</strong> $100 por 2 tablets o $120
                    por 3 tablets
                    <br />
                    <em>
                        Agrega $30 por Juegos de Mesa Gigantes por 2 horas con el paquete
                        completo.
                    </em>
                    <br />
                    <em>Máximo 20 personas.</em>
                </div>

                <li>
                    <strong>Eventos:</strong> Contáctanos para más información
                </li>
            </ul>
        </section>
    );
}

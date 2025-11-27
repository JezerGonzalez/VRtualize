import FeatureCard from "./FeatureCard";

export default function Features() {
    return (
        <section className="features" aria-labelledby="features-heading">
            <h2 id="features-heading" style={{ display: "none" }}>
                Nuestras Características
            </h2>

            <FeatureCard title="Lasertag de Realidad Virtual">
                Prepárate para una batalla llena de adrenalina en arenas virtuales.
            </FeatureCard>

            <FeatureCard title="Estaciones de Realidad Virtual">
                Explora experiencias emocionantes diseñadas para todas las edades.
            </FeatureCard>

            <FeatureCard title="Mario Kart AR">
                Carreras coloridas con tecnología de realidad aumentada.
            </FeatureCard>

            <FeatureCard title="Juegos de Mesa Digitales">
                Pantalla táctil de 32&quot; y tablets interactivas para diversión sin fin.
            </FeatureCard>
        </section>
    );
}

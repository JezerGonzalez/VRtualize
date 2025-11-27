import { ReactNode } from "react";

interface FeatureCardProps {
    title: string;
    children: ReactNode;
}

export default function FeatureCard({ title, children }: FeatureCardProps) {
    return (
        <article className="feature-card" tabIndex={0}>
            <h3>{title}</h3>
            <p>{children}</p>
        </article>
    );
}

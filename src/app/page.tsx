export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
            <header className="mb-12 text-center">
                <img
                    src="/images/avatar.png"
                    alt="Dylan BALLET"
                    className="w-32 h-32 rounded-full border-2 border-orange-300 mx-auto mb-4" // Ajout du contour orange
                />
                <h1 className="text-4xl font-bold mb-2 text-orange-300">Dylan BALLET</h1>
                <p className="text-lg">Développeur d'applications pour l'Investigation du numérique</p>
            </header>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-orange-300">Compétences</h2>
                <div className="flex flex-wrap gap-2">
                    {["Java", "Php", "Python", "Next.js", "Tailwind", "PostgreSQL", "SQLite"].map((skill) => (
                        <span key={skill} className="bg-gray-700 text-orange-300 px-3 py-1 rounded text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-orange-300">Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        {title: "Noties", description: "Application de notes en jeu (en développement)"},
                        {title: "JA-Dex", description: "Pokédex en ligne"},
                        {title: "ShibaClicker", description: "Jeu de type clicker (en développement)"},
                        {title: "History Maker", description: "Site web d'histoires, dont VOUS êtes le héro"}
                    ].map((project, index) => (
                        <div key={index} className="bg-gray-800 border border-gray-600 p-4 rounded">
                            <h3 className="text-xl font-bold text-orange-300">{project.title}</h3>
                            <p className="text-gray-200">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2 text-orange-300">À propos</h2>
                <div className="bg-gray-800 border border-gray-600 p-4 rounded">
                    <p className="text-gray-200">
                        Etudiant en 3e année en BUT informatique de Lens ainsi qu'alternant.
                    </p>
                    <p>
                        Développeur d'applications au profit de l'investigation du numérique et d'applications web.
                    </p>
                    <p>
                        Batteur dans deux groupes, une Harmonie et un groupe de Jazz.
                    </p>
                </div>
            </section>
        </div>
    )
}

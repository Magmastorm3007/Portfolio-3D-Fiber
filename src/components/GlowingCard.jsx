export default function GlowingCard({ title, subtitle, description, tech, link, linkLabel }) {
    return (
        <div className="bg-black border border-green-400/60 rounded-xl p-6 
        shadow-none sm:shadow-[0_0_20px_#00ff00aa] transition hover:scale-[1.02]">
      
        <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
        {subtitle && <p className="text-gray-400 mb-3 text-sm">{subtitle}</p>}
        <p className="text-gray-300 mb-3">{description}</p>
        {tech && <p className="text-green-400 text-sm">{tech}</p>}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-200 text-sm mt-2 inline-block"
          >
            {linkLabel}
          </a>
        )}
      </div>
    );
  }
  
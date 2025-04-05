import { motion } from "motion/react";
import FadeUpOnScroll from "../../animations/FadeUpOnScroll";

export default function ProductionCompanies({ companies }) {
  if (!companies || companies.length === 0) return null;

  return (
    <div className="movie__production-container">
      <FadeUpOnScroll delay={0.3}>
        <div className="movie__heading">Production companies</div>
        <div className="movie__production">
          {companies.map(
            (company, index) =>
              company.logo_path && (
                <motion.div
                  key={index}
                  className="productionCompanyImage"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    className="movie__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                    alt={company.name}
                  />
                  <span>{company.name}</span>
                </motion.div>
              )
          )}
        </div>
      </FadeUpOnScroll>
    </div>
  );
}

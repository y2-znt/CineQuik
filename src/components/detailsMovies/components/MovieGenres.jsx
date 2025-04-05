import { motion } from "motion/react";

export default function MovieGenres({ genres }) {
  return (
    <div className="movie__genres">
      {genres.map((genre) => (
        <motion.div
          key={genre.id}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="movie__genre" id={genre.id}>
            {genre.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import {
  fetchCarouselMovies,
  fetchDetailsMovies,
  fetchPopularMovies,
  fetchRecommendedMovies,
  fetchSearchMovies,
  fetchTopRatedMovies,
  fetchVideosMovies,
  fetchWatchProvidersMovies,
} from "../services/moviesApi";

export function useCarouselMovies() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carouselMovies"],
    queryFn: fetchCarouselMovies,
  });

  return { data, isLoading, error };
}

export function useMovieDetails(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["detailsMovies", id],
    queryFn: () => fetchDetailsMovies(id),
  });

  return { data, isLoading, error };
}

export function useSearchMovies(query) {
  const { data, refetch, error, isLoading } = useQuery({
    queryKey: ["searchedMovies", query],
    queryFn: () => fetchSearchMovies(query),
    enabled: false,
    onSuccess: (data) => onSearch(data),
  });

  return { data, refetch, error, isLoading };
}

export function useRecommendedMovies(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["recommendedMovies", id],
    queryFn: () => fetchRecommendedMovies(id),
    enabled: !!id,
  });

  return { data, error, isLoading };
}

export function usePopularMovies() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: () => fetchPopularMovies(),
  });

  return { data, error, isLoading };
}

export function useTopRatedMovies() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => fetchTopRatedMovies(),
  });

  return { data, error, isLoading };
}

export function useVideosMovies(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["videosMovies", id],
    queryFn: () => fetchVideosMovies(id),
  });

  return { data, error, isLoading };
}

export function useWatchProvidersMovies(id) {
  const { data } = useQuery({
    queryKey: ["watchProviders", id],
    queryFn: () => fetchWatchProvidersMovies(id),
  });

  return { data };
}

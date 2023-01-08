import { getSession } from "next-auth/react"

export default async function listMovies(req: any, res: any) {
  const session = await getSession({ req })

  if (session) {
    res.send({
      movies: [
        { title: "Alien vs Predator", id: 1 },
        { title: "Reservoir Dogs", id: 2 },
      ],
    })
  } else {
    res.send({
      error: "You must sign in to view movies.",
    })
  }
}
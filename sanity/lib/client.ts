import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skLw16KDeV8KaUiyp04Af0lAfGAU9vrIMu3mINaj5DBJwJO7nVirIRsz7pJ4Rbi9sLj51GreNKoxbVu2FJ8RPw5qjnR7lRMVwpeTn4EYn4PBRJ27QVazVhG3sk2aPBgJQ8Wh0vKPeXnZIujGrxdqNYd5M8T1fMo70PMgkvdGhm8Cp4ACZYEq",
})

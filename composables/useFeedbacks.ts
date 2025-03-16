import { Feedbacks } from 'assets/data.json'
import type { Feedback } from '~/types'

export const useFeedbacks = () => {
  return useState<Feedback[]>('feedbacks-lista', () => Feedbacks)
}
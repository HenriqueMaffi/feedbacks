import { Feedbacks } from 'assets/feedbacks.json'
import type { Feedback } from '~/types'

export const useFeedbacks = () => {
  return useState<Feedback[]>('feedbacks-lista', () => Feedbacks)
}
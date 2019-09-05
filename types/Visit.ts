/**
 * Visit
 * representation of a toilet visit
 */
export interface Visit {
  id: number;
  location_id: number;
  duration: number;
  end_time: string;
  start_time: string;
}

//Model interface for Photograper object
//Includes all properties present in the objects coming from the API calls
export interface Photographer {
  id?: number;
  guid?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  is_removed?: boolean;
  description?: string;
  avatar?: string;
  image?: string;
  facebook?: string;
  instagram?: string;
  webpage?: string;
}

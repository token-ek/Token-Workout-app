export interface StringsObject {
  st_privacypolicy: any;
  st_termsofservice: any;
  st_aboutus: any;
}

export interface QuotesObject {
  id: number;
  quote_id: string;
  quote_title: string;
}


export interface DietsObject {
  id: number;
  diet_id: string;
  diet_title: string;
  diet_description: string;
  diet_ingredients: string;
  diet_category: string;
  diet_directions: string;
  diet_calories: string;
  diet_carbs: string;
  diet_protein: string;
  diet_fat: string;
  diet_time: string;
  diet_servings: string;
  diet_image: string;
  diet_featured: string;
  category_title: string;
}

export interface CategoriesObject {
  id: number;
  category_id: string;
  category_title: string;
  category_image: string;
}

export interface PostsObject {
  id: number;
  post_id: string;
  post_title: string;
  post_description: string;
  post_tag: string;
  post_featured: string;
  published: string;
  post_date: string;
  post_image: string;
  tag_title: string;
}

export interface GoalsObject {
  id: number;
  goal_id: string;
  goal_title: string;
  goal_image: string;
}

export interface LevelsObject {
  id: number;
  level_id: string;
  level_title: string;
  level_image: string;
}

export interface TagsObject {
  id: number;
  tag_id: string;
  tag_title: string;
}

export interface EquipmentsObject {
  id: number;
  equipment_id: string;
  equipment_title: string;
  equipment_image: string;
}

export interface BodypartsObject {
  id: number;
  bodypart_id: string;
  bodypart_title: string;
  bodypart_image: string;
}

export interface WorkoutsObject {
  id: number;
  workout_id: string;
  workout_title: string;
  workout_description: string;
  workout_goal: string;
  workout_level: string;
  workout_duration: string;
  workout_image: string;
  goal_title: string;
  level_title: string;
}

export interface MuscleObject {
  exercise_id: string;
  exercise_title: string;
  exercise_image: string;
  bodypart_title: string;
  bodypart_id: string;
}

export interface EquipmentObject {
  exercise_id: string;
  exercise_title: string;
  exercise_image: string;
  level_title: string;
  level_id?: any;
}

export interface ExercisesObject {
  exercise_id: string;
  exercise_title: string;
  exercise_equipment: string;
  exercise_level: string;
  exercise_reps: string;
  exercise_rest: string;
  exercise_sets: string;
  exercise_video: string;
  exercise_image: string;
  exercise_tips: string;
  exercise_instructions: string;
  equipment_title: string;
  level_title: string;
}

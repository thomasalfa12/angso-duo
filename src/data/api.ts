// src/data/api.ts

// Definisikan tipe data di sini agar bisa diakses dari mana saja
export interface MenuItem {
    id: string;
    name: string;
    image: string;
}

// Tipe response minimal dari API eksternal
interface MealAPIItem { idMeal: string; strMeal: string; strMealThumb: string }
interface MealsResponse { meals: MealAPIItem[] | null }
interface DrinkAPIItem { idDrink: string; strDrink: string; strDrinkThumb: string }
interface DrinksResponse { drinks: DrinkAPIItem[] | null }

// Fungsi untuk mengambil data makanan dari TheMealDB API
export async function getFoodData(category: string): Promise<MenuItem[]> {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        if (!res.ok) throw new Error("Gagal mengambil data makanan.");
        const data = (await res.json()) as MealsResponse;
        // Gunakan optional chaining (?.) untuk keamanan jika 'meals' null
        return data.meals?.map((meal: MealAPIItem) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            image: meal.strMealThumb,
        })) ?? [];
    } catch (error) {
        console.error(error);
        return []; // Kembalikan array kosong jika terjadi error
    }
}

// Fungsi untuk mengambil data minuman dari TheCocktailDB API
export async function getDrinkData(): Promise<MenuItem[]> {
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`);
        if (!res.ok) throw new Error("Gagal mengambil data minuman.");
        const data = (await res.json()) as DrinksResponse;
        return data.drinks?.map((drink: DrinkAPIItem) => ({
            id: drink.idDrink,
            name: drink.strDrink,
            image: drink.strDrinkThumb,
        })) ?? [];
    } catch (error) {
        console.error(error);
        return []; // Kembalikan array kosong jika terjadi error
    }
}
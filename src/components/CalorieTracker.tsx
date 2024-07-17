import { useActivity } from "../hooks/useActivity"


export default function CalorieTracker() {

    const { caloriesConsumed, caloriesBurned, totalCalories } = useActivity()

    return (

        <>
            <h2 className=" text-4xl font-black text-white text-center"> Resumen de Calorias</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">

                <p className=" text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center ">
                    <span className=" font-black text-6xl">{caloriesConsumed}</span>
                    Consumidas
                </p>

                <p className=" text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center ">
                    <span className=" font-black text-6xl">{caloriesBurned}</span>
                    Quemadas
                </p>

                <p className=" text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center ">
                    <span className=" font-black text-6xl">{totalCalories}</span>
                    Diferencia
                </p>

            </div>


        </>
    )
}

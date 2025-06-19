import donorMap from "../assets/images/donar_map.png"
export default function PosterLanding() {
  return (
    <div className="w-screen flex flex-col text-xl justify-center text-center gap-8 my-5">
        <h3 className="text-red-600 text-3xl font-bold">What is BloodLine?</h3>
        <h1><span className="text-red-600 text-2xl font-semibold">BloodLine</span> is a platform dedicated to saving lives by facilitating seamless connections between blood recipients and donors, especially during critical emergencies. It ensures timely access to lifesaving resources while promoting a collaborative and efficient blood donation system.</h1>
        <img src={donorMap} alt="blood banner image" />
    </div>
  )
}

interface Feature {
    text: string;
    available: boolean;
}

interface PlanCardProps {
    plan: {
        icon: string;
        iconGradient: string;
        title: string;
        subtitle: string;
        price: string;
        features: Feature[];
        buttonText: string;
        buttonStyle: string;
        containerStyle: string;
        isPopular: boolean;
    };
}

function PlanCard({ plan }: PlanCardProps) {
    const { 
        icon, 
        iconGradient, 
        title, 
        subtitle, 
        price, 
        features, 
        buttonText, 
        buttonStyle,
        isPopular,
        containerStyle 
    } = plan;

    return (
        <div className={`w-80 h-128 rounded-xl p-6 bg-white/5 relative ${containerStyle}`}>
            {isPopular && (
                <span className="bg-red-500 absolute -top-3 flex left-1/2 px-4 font-bold py-2 text-xs rounded-2xl -translate-x-1/2">
                    MÁS POPULAR
                </span>
            )}
            
            <div className={`w-12 h-12 rounded-xl ${iconGradient} flex justify-center items-center text-2xl`}>
                <i className={`bx ${icon}`}></i>
            </div>
            
            <h1 className="mt-6 text-2xl font-semibold">{title}</h1>
            <p className="text-gray-400 text-sm">{subtitle}</p>
            <h3 className="text-4xl font-black mt-5">
                ${price} <span className="text-sm font-medium relative right-1 text-gray-400">/mes</span>
            </h3>
            
            <ul className="mt-4 flex flex-col gap-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full ${
                            feature.available 
                                ? 'bg-red-500/20 text-red-500' 
                                : 'bg-gray-500/20 text-gray-500'
                        }`}>
                            <i className="bx bx-check text-sm"></i>
                        </span>
                        <span className={`text-sm ${
                            feature.available 
                                ? '' 
                                : 'text-gray-500 line-through'
                        }`}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <button className={`font-semibold transition-all duration-300 ease-in-out text-sm mt-6 py-3 cursor-pointer rounded-xl w-full ${buttonStyle}`}>
                {buttonText}
            </button>
        </div>
    );
}

export default PlanCard;
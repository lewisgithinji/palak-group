import { ClipboardCheck, FileText, Truck, HardHat, CheckCircle2, Headphones } from 'lucide-react'

const steps = [
    {
        icon: ClipboardCheck,
        title: 'Consultation',
        description: 'We assess your needs, conduct site surveys, and provide expert recommendations.',
        number: '01',
    },
    {
        icon: FileText,
        title: 'Proposal',
        description: 'Receive a detailed proposal with specifications, pricing, and project timeline.',
        number: '02',
    },
    {
        icon: Truck,
        title: 'Delivery',
        description: 'Equipment manufactured to specification and delivered to your site.',
        number: '03',
    },
    {
        icon: HardHat,
        title: 'Installation',
        description: 'Our certified technicians install your system following German quality standards.',
        number: '04',
    },
    {
        icon: CheckCircle2,
        title: 'Commissioning',
        description: 'Thorough testing, certification, and comprehensive handover training.',
        number: '05',
    },
    {
        icon: Headphones,
        title: 'Support',
        description: 'Ongoing maintenance and 24/7 support to keep your system running perfectly.',
        number: '06',
    },
]

export function ServiceProcess() {
    return (
        <section className="section bg-secondary-900 text-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        How We Work
                    </h2>
                    <p className="text-lg text-secondary-300">
                        A streamlined process designed to deliver excellence at every step.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-colors group"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-primary-500 text-white font-bold flex items-center justify-center text-sm">
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
                                <step.icon className="h-7 w-7" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-secondary-300 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

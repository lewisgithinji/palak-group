import { HSFTECH_INFO } from '@/lib/constants'
import { CheckCircle, Globe, Factory, Award } from 'lucide-react'

export function Partnership() {
  const features = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: '100,000 m² Factory',
      description: 'State-of-the-art manufacturing facility',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: '50+ Countries',
      description: 'Global presence and service network',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'German Standards',
      description: 'Precision engineering and quality control',
    },
  ]

  const certifications = [
    'ISO 9001 Quality Management',
    'ISO 14001 Environmental',
    'CE Certification',
    'EN 81 Elevator Safety',
  ]

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Partnership
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-6">
              Powered by{' '}
              <span className="text-primary-600">HSFTECH</span> German Technology
            </h2>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              As the official East African partner of HSFTECH, we bring world-class
              German-engineered elevator solutions to Kenya. With over{' '}
              {HSFTECH_INFO.projectsCompleted} projects across {HSFTECH_INFO.cities}{' '}
              cities worldwide, HSFTECH represents the pinnacle of vertical
              transportation technology.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-secondary-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-secondary-500">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-secondary-50 rounded-2xl p-6">
              <h4 className="font-semibold text-secondary-900 mb-4">
                Certifications & Standards
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-secondary-600"
                  >
                    <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-soft-xl">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/hsftech-factory.jpg)',
                  backgroundColor: '#E2E8F0',
                }}
              />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-soft-lg p-6 z-20">
              <div className="text-4xl font-bold text-primary-600 mb-1">
                {HSFTECH_INFO.annualCapacity.toLocaleString()}+
              </div>
              <div className="text-secondary-600">Units Per Year</div>
              <div className="text-sm text-secondary-400">Production Capacity</div>
            </div>

            {/* Year Badge */}
            <div className="absolute -top-4 -right-4 bg-secondary-900 text-white rounded-2xl px-6 py-4 z-20">
              <div className="text-sm text-secondary-300">Established</div>
              <div className="text-2xl font-bold">{HSFTECH_INFO.founded}</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-20 w-40 h-40 bg-primary-100 rounded-full -z-10" />
            <div className="absolute -bottom-10 right-1/3 w-24 h-24 bg-secondary-100 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

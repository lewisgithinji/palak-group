import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProjectDetail } from '@/components/sections/projects/project-detail'
import { RelatedProjects } from '@/components/sections/projects/related-projects'
import { CTASection } from '@/components/sections/cta-section'
import { projects, getProjectBySlug } from '@/data'

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

// Generate static paths for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

// Generate metadata for each project
export async function generateMetadata(props: ProjectPageProps): Promise<Metadata> {
    const params = await props.params;
    const project = getProjectBySlug(params.slug)

    if (!project) {
        return {
            title: 'Project Not Found',
        }
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Preedos Kenya`,
            description: project.description,
            images: project.images[0] ? [project.images[0]] : undefined,
        },
    }
}

export default async function ProjectPage(props: ProjectPageProps) {
    const params = await props.params;
    const project = getProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    return (
        <>
            <Header />
            <main>
                <ProjectDetail project={project} />
                <RelatedProjects currentProjectId={project.id} projectType={project.type} />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}

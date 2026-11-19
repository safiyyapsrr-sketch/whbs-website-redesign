import { LMS_COURSES } from '@/lib/data'
import SvgIcon from '@/components/ui/SvgIcon'

function CourseRow({
  course,
}: {
  course: (typeof LMS_COURSES)[number]
}) {
  return (
    <div
      className="bg-[#F8FAFC] rounded-[12px] px-4 py-[14px] mb-[10px]
        border border-[#E2E8F0] flex items-center gap-[14px]"
    >
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-[8px] flex items-center justify-center flex-shrink-0"
        style={{ background: course.iconBg, color: course.iconColor }}
      >
        <SvgIcon pathData={course.iconPath} size={18} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold text-[#0F172A] truncate">
          {course.title}
        </div>
        {/* Progress bar */}
        <div
          className="h-1 bg-[#F1F5F9] rounded-full mt-1.5 overflow-hidden"
        >
          <div
            className="h-full bg-green rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
        <div className="text-[11px] text-[#94A3B8] mt-[3px]">
          {course.progress}% completion
        </div>
      </div>
    </div>
  )
}

export default function LmsMockup() {
  return (
    <div
      className="bg-white border border-[#E2E8F0] rounded-[24px] p-8 shadow-lg"
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        <span className="text-[12px] font-semibold text-[#94A3B8] ml-2">
          WHBS Learning Portal
        </span>
      </div>

      {/* Active courses label */}
      <div
        className="text-[12px] font-semibold text-[#94A3B8] mb-3
          uppercase tracking-wider"
      >
        Active Courses
      </div>

      {/* Courses */}
      {LMS_COURSES.map((course) => (
        <CourseRow key={course.title} course={course} />
      ))}

      {/* Stats footer */}
      <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex gap-5">
        <div>
          <div className="text-[22px] font-extrabold tracking-tightest text-[#0F172A]">
            1100<span className="text-green">+</span>
          </div>
          <div className="text-[11px] text-[#94A3B8] mt-0.5 uppercase tracking-wider">
            Projects
          </div>
        </div>
        <div>
          <div className="text-[22px] font-extrabold tracking-tightest text-[#0F172A]">
            14
          </div>
          <div className="text-[11px] text-[#94A3B8] mt-0.5 uppercase tracking-wider">
            Countries
          </div>
        </div>
        <div>
          <div className="text-[22px] font-extrabold tracking-tightest text-[#0F172A]">
            26<span className="text-green">yrs</span>
          </div>
          <div className="text-[11px] text-[#94A3B8] mt-0.5 uppercase tracking-wider">
            Experience
          </div>
        </div>
      </div>
    </div>
  )
}

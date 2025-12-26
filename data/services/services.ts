import { Service } from "./types"
import { level3dip } from "./level3dip"
import { cctv } from "./cctv"
import { cscs } from "./cscs"
import { hsc } from "./hsc"
import { internationalSchoolApplication } from "./internationalSchoolApplication"
import { mathEng } from "./mathEng"
import { postgraduate } from "./postgraduate"
import { professionalCV } from "./professionalCV"
import { ukTraining } from "./ukTraining"
import { level5dip } from "./level5dip"

export const services: Service[] = [
  internationalSchoolApplication,
  hsc,
  ukTraining,
  professionalCV,
  postgraduate,
  level3dip,
  mathEng,
  cctv,
  cscs,
  level5dip
]

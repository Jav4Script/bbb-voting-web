import { CaptchaSolution } from '@features/captcha/entities/CaptchaSolution'
import { CaptchaSolutionDTO } from '@features/captcha/dtos/CaptchaSolutionDTO'

export class CaptchaMapper {
  static toCaptchaSolutionDTO(
    captchaSolution: CaptchaSolution
  ): CaptchaSolutionDTO {
    return {
      captcha_id: captchaSolution.captchaId,
      captcha_solution: captchaSolution.captchaSolution,
    }
  }
  static toCaptchaSolution(
    captchaSolutionDTO: CaptchaSolutionDTO
  ): CaptchaSolution {
    return {
      captchaId: captchaSolutionDTO.captcha_id,
      captchaSolution: captchaSolutionDTO.captcha_solution,
    }
  }
}

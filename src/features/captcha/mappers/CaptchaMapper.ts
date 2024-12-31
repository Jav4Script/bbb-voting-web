import { CaptchaSolutionDTO } from '@features/captcha/dtos/CaptchaSolutionDTO'
import { CaptchaSolution } from '@features/captcha/entities/CaptchaSolution'
import { Captcha } from '@features/captcha/entities/Captcha'
import { CaptchaDTO } from '@features/captcha/dtos/CaptchaDTO'

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

  static ToCaptchaEntity(captchaDTO: CaptchaDTO): Captcha {
    return {
      id: captchaDTO.id,
      imageUrl: captchaDTO.image_url,
    }
  }
}

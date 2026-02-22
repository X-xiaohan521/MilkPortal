import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PasswordRequirements } from "./password-requirements"
import { AvatarCropper } from "./avatar-cropper"

interface profile {
    username: string
    avatar: string
}

export default function ProfileField() {
    return (
        <div className="w-full p-6 grid grid-cols-2">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Your Profile</FieldLegend>
                        <FieldDescription>
                            All your sensitive information are secure and encrypted
                        </FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="new_username">
                                    Username
                                </FieldLabel>
                                <Input
                                    id="new_username"
                                    placeholder={data.user.username}
                                    required
                                
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                    Password
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-number-uw1"
                                    type="password"
                                    placeholder=""
                                    required
                                />
                                <FieldDescription>
                                    <PasswordRequirements
                                        lengthOk={true}
                                        charsetOk={false}
                                        mixOk={false}
                                    />
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />
                    <FieldSet>
                        <FieldLegend>Two Factor Authentication</FieldLegend>
                        <FieldDescription>
                            2FA now supports Microsoft Authenticator
                        </FieldDescription>
                        <FieldGroup>
                            <Field orientation="horizontal">
                                <Checkbox
                                    id="checkout-7j9-same-as-shipping-wgm"
                                    defaultChecked
                                />
                                <FieldLabel
                                    htmlFor="checkout-7j9-same-as-shipping-wgm"
                                    className="font-normal"
                                >
                                    Same as shipping address
                                </FieldLabel>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                    Comments
                                </FieldLabel>
                                <Textarea
                                    id="checkout-7j9-optional-comments"
                                    placeholder="Add any additional comments"
                                    className="resize-none"
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button type="submit">Submit</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
            <div className="px-6">
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Avatar</FieldLegend>
                        <AvatarCropper src={""} />
                    </FieldSet>
                </FieldGroup>
            </div>
        </div>
    )
}

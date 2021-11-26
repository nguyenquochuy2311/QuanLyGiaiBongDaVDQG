<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'UserName' => 'required|max:255',
            'Email' => 'required|email',
            Rule::unique('user', 'Email')->ignore($this->id),
            'Password' => 'required',
            'Role' => 'required|integer'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi cập nhật dữ liệu',
            'detail' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'UserName.required' => 'User name không được bỏ trống!',
            'Email.required' => 'Email không được bỏ trống!',
            'Email.email' => 'Email không đúng định dạng',
            'Email.unique' => 'Email đã được đăng ký!',
            'Password.required' => 'Mật khẩu không được bỏ trống',
            'Role.required' => 'Chưa phân quyền user!',
        ];
    }
}
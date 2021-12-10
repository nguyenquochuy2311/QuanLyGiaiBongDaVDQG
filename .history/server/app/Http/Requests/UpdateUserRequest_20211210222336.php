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
            'username' => 'required|max:255',
            // 'email' => 'required|email',
            Rule::unique('user', 'email')->ignore($this->id),
            // 'password' => 'required',
            'role' => 'required|integer'
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
            'username.required' => 'User name không được bỏ trống!',
            // 'email.required' => 'Email không được bỏ trống!',
            // 'email.email' => 'Email không đúng định dạng',
            // 'email.unique' => 'Email đã được đăng ký!',
            // 'password.required' => 'Mật khẩu không được bỏ trống',
            'role.required' => 'Chưa phân quyền user!',
        ];
    }
}
<?php

namespace App\Http\Requests;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'Email' => 'required|unique:user|email|max:255',
            'Password' => 'required|max:255',
            'Role' => 'required|integer',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi thêm dữ liệu',
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
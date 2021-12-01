<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTrongTaiRequest extends FormRequest
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
            'TenTT'=> 'required',
            'NgaySinh'=> 'required',
            'ViTri'=> 'required',
            'AnhDaiDien'=> 'required',
            
            Rule::unique('trongtai', 'AnhDaiDien')->ignore($this->id)
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
            'TenTT.required' => 'Tên Trọng tài không được bỏ trống!',
            'NgaySinh.required' => 'Ngày sinh Trọng tài không được bỏ trống!',
            'ViTri.required' => 'Vi Tri Trọng tài không được bỏ trống!',
            'AnhDaiDien.required' => 'Ảnh Trọng tài không được bỏ trống!',

        ];
    }
}
